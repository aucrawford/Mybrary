FilePond.registerPlugin(
  FilePondPluginImagePreview,
  FilePondPluginImageResize,
  FilePondPluginFileEncode
) 
FilePond.setOptions({
  stylePanelAspectRatio: '100:150',
  imageResizeTargetWidth: 100,
  imageResizeTargetTargetHeight: 150
})

FilePond.parse(document.body)