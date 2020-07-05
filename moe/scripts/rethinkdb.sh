#!/bin/bash

binaryInstall () {
  echo "Installing binary"
  source /etc/lsb-release && echo "deb https://download.rethinkdb.com/repository/ubuntu-$DISTRIB_CODENAME $DISTRIB_CODENAME main" | sudo tee /etc/apt/sources.list.d/rethinkdb.list
  wget -qO- https://download.rethinkdb.com/repository/raw/pubkey.gpg | sudo apt-key add -
  sudo apt-get update
  sudo apt-get install rethinkdb
}

sourceInstall() {
  sudo apt-get install build-essential protobuf-compiler python \
                     libprotobuf-dev libcurl4-openssl-dev \
                     libboost-all-dev libncurses5-dev \
                     libjemalloc-dev wget m4
   wget https://download.rethinkdb.com/repository/raw/dist/rethinkdb-2.4.0.tgz
   tar xf rethinkdb-2.4.0.tgz
   cd rethinkdb-2.4.0
  ./configure --allow-fetch
  make
  # TODO: change to check for number of cores
  #make -j 4 #if 4 is number of cores
  sudo make install
}
