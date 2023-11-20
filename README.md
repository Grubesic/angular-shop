# AngularShop

Länk till kursmaterial: https://docs.google.com/document/d/1eqOHko0CQ5R275fez4h43bAdRF6rg5gIdnRO2cJ4Svc/edit

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Build docker image (Inte en del av kursen)

`docker build -t grubesic/angular-shop .`


## Wireguard (Inte en del av kursen)

Stop Wireguard:
`sudo wg-quick down wg0`

Start Wireguard:
`sudo wg-quick up wg0`

Wireguard status:
`sudo wg show`

Wireguard config:
`sudo less /etc/wireguard/wg0.conf`

VPS config:
```
[Interface]
Address = 10.6.0.1/24
ListenPort = 53916
PrivateKey = <vps-privatekey>

[Peer]
PublicKey = <client-publickey>
AllowedIPs = 10.6.0.2/32
```

Client-config

```
[Interface]
Address = 10.6.0.2/32
PrivateKey = <client-privatekey>

[Peer]
PublicKey = <vps-publickey>
Endpoint = <vps-host-ip>:53916
AllowedIPs = 0.0.0.0/0
PersistentKeepalive = 25
```



