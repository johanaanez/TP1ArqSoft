FROM python:3

RUN mkdir /opt/app
WORKDIR /opt/app
COPY app.py ./
RUN pip install flask gunicorn

ENTRYPOINT [ "python", "./app.py" ]
