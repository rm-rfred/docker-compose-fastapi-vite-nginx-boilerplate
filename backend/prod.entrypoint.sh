#!/bin/sh
gunicorn main:app --workers ${API_NUM_WORKERS} --worker-class uvicorn.workers.UvicornWorker --bind 0.0.0.0:80
