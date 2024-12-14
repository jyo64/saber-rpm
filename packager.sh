#!/bin/bash

VERSION=0.25.3

rm -rf /home/jyo/rpmbuild/

cd /home/jyo/saber

flutter build linux

rpmdev-setuptree

# Copy the built files to the rpm build directory

cp -r /home/jyo/saber/build/linux/x64/release/bundle /home/jyo/rpmbuild/saber-$VERSION

cp /home/jyo/saber-rpm/saber.desktop /home/jyo/rpmbuild/saber-$VERSION

cd /home/jyo/rpmbuild/saber-$VERSION/lib

patchelf --print-rpath *

# For all files in the lib directory, set the rpath to $ORIGIN
for file in *; do
    patchelf --set-rpath '$ORIGIN' "$file"
done

patchelf --print-rpath *

cd /home/jyo/rpmbuild/

# cd Saber-$VERSION

tar --create --file saber-$VERSION.tar.gz saber-$VERSION

mv saber-$VERSION.tar.gz /home/jyo/rpmbuild/SOURCES

cp /home/jyo/saber-rpm/rpmbuild/SPECS/saber.spec /home/jyo/rpmbuild/SPECS

# cd /home/jyo/rpmbuild/SPECS

cd /home/jyo/

rpmbuild -bb ~/rpmbuild/SPECS/saber.spec



