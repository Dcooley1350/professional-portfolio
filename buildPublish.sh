#!/bin/bash

npm run build && \
aws s3 sync ./public/ s3://www.devincooley.dev/