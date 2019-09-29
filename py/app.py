import time
from flask import Flask
from datetime import datetime

app = Flask(__name__)

@app.route("/")
def ping():
	return "python - ping"

@app.route("/timeout")
def timeout():
	time.sleep(5)
	return "python - timeout"

@app.route("/heavy")
def heavy():
  start = datetime.now()
  startToMillisecond = start.timestamp() * 1000
  times = 99999999999999999999
  for i in range(times):
    now = datetime.now()
    nowToMillisecond = now.timestamp() * 1000
    if (nowToMillisecond - startToMillisecond >= 5000):
      return "python - heavy"

if __name__ == "__main__":
	app.run(debug=True)
