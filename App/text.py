from flask import Flask,render_template
app = Flask(__name__)


@app.route("/")
def first_one():
    return render_template('first_one.html')


if __name__ == "__main__":
    app.run(debug=True)
