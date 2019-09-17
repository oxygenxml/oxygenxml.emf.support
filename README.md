# oxygenxml.emf.support
Oxygen XML Editor does not render by default EMF images. 

This plugin allow it to render EMF images in Author mode but you need to install 
additional libraries in order to make it work.

To install this plugin you need to download this project as ZIP file end extract it inside the **plugins** folder within Oxygen install dir.
Then you need to download a binary libraries distribution from:

http://java.freehep.org/vectorgraphics/index.html

for example download the ZIP file:

ftp://ftp.slac.stanford.edu/software/freehep/VectorGraphics/v2.1.1/vectorgraphics-2.1.1-bin.zip

unpack it and all the "*.jar" libraries from its "lib" folder should be moved to the plugin's "lib" folder.

Copyright and License
---------------------
Copyright 2019 Syncro Soft SRL.

This project is licensed under [Apache License 2.0](https://github.com/oxygenxml/oxygenxml.emf.support/blob/master/LICENSE). The required binary libraries (see the note above) are licensed under their own terms.
