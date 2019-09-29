FROM python:3

RUN mkdir /opt/app
WORKDIR /opt/app
COPY app.py ./
RUN pip install flask gunicorn

ENTRYPOINT [ "gunicorn" , "-w", "1", "app:app", "-b", "0.0.0.0:5000" ]

