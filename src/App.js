import React from 'react';
import Neuroglancer from '@janelia-flyem/react-neuroglancer';
import './App.css' //removed for bundling
const defaultViewerState = {
  layers: {
    greyscale: {
      type: 'image',
      source: 'dvid://https://flyem.dvid.io/ab6e610d4fe140aba0e030645a1d7229/grayscalejpeg',
    },
    segmentation: {
      type: 'segmentation',
      source: 'dvid://https://flyem.dvid.io/d925633ed0974da78e2bb5cf38d01f4d/segmentation',
      segments: [],
    },
  },
  perspectiveZoom: 50,
  navigation: {
    zoomFactor: 8,
  },
  segments: [],
};



function NeuroglancerViewer({ viewerState = defaultViewerState, brainMapsClientId = "NOT_A_VALID_ID", onViewerStateChanged = null}) {
  function handleOnViewerStateChanged(newState) {
      onViewerStateChanged(newState);
  }

  return (
      <Neuroglancer
        viewerState={viewerState}
        brainMapsClientId={brainMapsClientId}
        onViewerStateChanged={handleOnViewerStateChanged}
      />
  );
}

export default NeuroglancerViewer;
