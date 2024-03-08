sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot
 
---
Creating of Certifcates and mapping to nginx server.
sudo certbot --nginx -d connectnext.co -d 'www.connectnext.co' -d 'api.connectnext.co'
