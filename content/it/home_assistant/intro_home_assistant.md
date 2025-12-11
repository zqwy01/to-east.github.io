---
title: intro_home_assistant
description:
tags:
author: zqwy
date: 2025-12-11
cover:
size_album:
instrument:
emotions:
genre:
epocha:
bpm:
daw:
upc:
ISWC:
multi_url:
icon:
cssclasses:
aliases:
  - зкву
  - зкву_музыка
alias: iha
publish: "true"
---
<h1 align=center>
<img src="home_assistant_banner.png" alt="home_assistant" href="https://www.home-assistant.io/" />
</h1>

# Что такое Home Assistant?
## Home Assistant — центр для: [интеграций](https://www.home-assistant.io/integrations/), [управлений IoT, автоматизаций, дэшбордов, голосовых помощников, организаций объектов, контроля электричества, аутентификаций пользователей, и как итог, это - операционная система - сервер - клиент](https://www.home-assistant.io/docs/)

# Архитектура Home Assistant

## Проект распостраняется под лицензией [APACHE2](https://www.apache.org/licenses/LICENSE-2.0)
## [Ядро](https://github.com/home-assistant/core) написано на [python3](https://www.python.org/) ([в проекте используются библиотеки](https://github.com/home-assistant/core/blob/dev/requirements.txt) созданные на [c](https://www.c-language.org/), [c++](https://isocpp.org/), [rust](https://rust-lang.org/)) (к примеру: [pillow](https://github.com/python-pillow/Pillow) [audioop](https://github.com/AbstractUmbra/audioop) [ulid-transform](https://github.com/bluetooth-devices/ulid-transform) [bcrypt](https://github.com/pyca/bcrypt) [uv](https://github.com/astral-sh/uv)) и использует [SQLAlchemy](https://www.sqlalchemy.org/) (означает возможность подключить любую реляционную СУБД), а [front_end](https://github.com/home-assistant/frontend), [верстается](https://developers.home-assistant.io/docs/frontend/development/) на [typescript](https://www.typescriptlang.org/) ([классическая оболочка](https://demo.home-assistant.io/#/lovelace/home))

## Следствие: [ядро комплируется из разных языков](https://github.com/home-assistant/core/actions), а интерпретируется питоном

![[ha-install-methods.png]]

## [HA устанавливается методами с определёнными возможностями, смотри пикрл для компромисса](https://www.home-assistant.io/installation/)

## [Ядро собирается под следующие процессоры](https://github.com/orgs/home-assistant/packages):
- [qemux86-64/qemuarm](https://qemu-project.gitlab.io)
- [Raspberry Pi 3/4](https://www.raspberrypi.com/)
- [tinker_board](https://tinker-board.asus.com/index.html)
- [khadas_vim3](https://www.khadas.com/vim3)
- x86-64 intel or amd
- aarch64/armv7/armhf
- [odroid-n2/c2/c4/m1/xu](https://www.hardkernel.com/)
- home assistant [yellow](https://www.home-assistant.io/yellow/)/[green](https://www.home-assistant.io/green/)
- I386

## [Установка HA как OS](https://github.com/home-assistant/operating-system)

## Совместимые OS с HA
- [linux](https://www.kernel.org/)
- [freebsd](https://www.freebsd.org/)
- [windows](https://www.microsoft.com/en-us/windows)
- [macos](https://www.apple.com/os/macos/)

## Установка HA как образ для следующих [гипервизоров](https://github.com/orgs/home-assistant/packages?repo_name=supervisor):
- [kvm](https://linux-kvm.org/)
- [virtual_box](https://github.com/VirtualBox/virtualbox)
- [vmware](https://www.vmware.com/)
- [proxmox](https://www.proxmox.com)
- [hyper-v](https://learn.microsoft.com/en-us/windows-server/virtualization/hyper-v/hyper-v-overview?pivots=windows)

## Установка HA как: контейнер, под или джейл
- [docker](https://docs.docker.com/compose/install/linux/)
- [podman](https://podman.io/)
- [lxc](https://linuxcontainers.org/lxc/)
- [openvz](https://openvz.org/)
- [kubrnetes](https://kubernetes.io/)
- [k3s](https://k3s.io/)
- [synology_nas](https://www.synology.com/en-us/dsm/packages/ContainerManager)
- [qnap_nas](https://www.qnap.com/en/software/container-station)

## Вывод: установка HA универсальна
