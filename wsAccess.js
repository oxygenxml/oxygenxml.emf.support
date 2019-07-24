function applicationStarted(pluginWorkspaceAccess) {
 imageHandler = {
      editImage: function(editContext){return null;},
      editImage: function(url){return false;},
      canHandleFileType: function(type){return type.equals("emf")},
      clearCache: function(){},
      getImageLayoutInformation: function(cp, rc){
         image = getEMFImage(pluginWorkspaceAccess, cp, rc);
         return new Packages.ro.sync.exml.workspace.api.images.handlers.ImageLayoutInformation(0, 0, image.getWidth(null), image.getHeight(null));
      },
      getImage: function(cp, rc){
         return getEMFImage(pluginWorkspaceAccess, cp, rc);
      }
 }
 pluginWorkspaceAccess.getImageUtilities().addImageHandler(new JavaAdapter(Packages.ro.sync.exml.workspace.api.images.handlers.EditImageHandler, imageHandler));
}

function getEMFImage(pluginWorkspaceAccess, cp, rc){
	inputStream = new Packages.org.freehep.graphicsio.emf.EMFInputStream(cp.getUrl().openStream() , Packages.org.freehep.graphicsio.emf.EMFInputStream.DEFAULT_VERSION);
	bounds = inputStream.readHeader().getBounds();
	renderer = new Packages.org.freehep.graphicsio.emf.EMFRenderer(inputStream);
	result = new Packages.java.awt.image.BufferedImage(bounds.width, bounds.height, Packages.java.awt.image.BufferedImage.TYPE_INT_RGB);
    g2d = result.createGraphics ();
	renderer.paint(g2d);
 return result;
}

function applicationClosing(pluginWorkspaceAccess) {
}
