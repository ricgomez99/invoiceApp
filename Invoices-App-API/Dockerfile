FROM node:20.15.1-alpine3.20
RUN addgroup invoiceapi && adduser -S -G invoiceapi invoiceapi
USER invoiceapi
WORKDIR /app/
COPY --chown=invoiceapi package*.json .
RUN npm install
COPY --chown=invoiceapi . .
EXPOSE 3000
CMD [ "npm", "start" ]