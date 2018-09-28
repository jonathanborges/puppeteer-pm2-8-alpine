FROM keymetrics/pm2:8-alpine

RUN apk add --no-cache \
    udev \
    ttf-freefont \
    chromium

CMD [ "pm2-runtime", "start", "/src/pm2.json" ]