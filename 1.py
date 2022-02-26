from flask import Flask, render_template, request, redirect, url_for, send_from_directory
import os
project_root = os.path.dirname(__file__)
template_path = os.path.join(project_root, 'app/templates')
css_path = os.path.join(project_root, 'app/css')
app = Flask(__name__, template_folder=template_path, static_folder=css_path)

feedbacks = 0


@app.route('/', methods=['GET'])
def hello():
    return render_template('1.html')

@app.route('/<path:path>')
def send_css(path):
    return send_from_directory('path', path)


@app.route('/feedback', methods=['GET'])
def feedback():
    return render_template('feedback.html')


@app.route('/send_feedback', methods=['POST'])
def get_feedback():
    global feedbacks
    data = request.get_data()
    f = open("feedback_" + str(feedbacks) + ".txt", 'w')
    feedbacks += 1
    f.write(str(data))
    f.close()
    return redirect(url_for('feedback'))


if __name__ == '__main__':
    app.debug = False
    app.run()
