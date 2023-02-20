import './index';
import { useRef, useState } from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls, useGLTF} from '@react-three/drei';
import { BoxGeometry } from 'three';

function App() {
  return (
    <div className="App">
     <div class="wrapper">
        <div class="card">
            <div class="product-canvas"></div>
            <h2>Color chooser</h2>
            <div class='colors'>
                 <div>
                    <input type="color" id="head" name="head"
                           value="#e66465" />
                    <label for="head">Main</label>
                  </div>

                <div>
                    <input type="color" id="body" name="body"
                            value="#f6b73c" />
                    <label for="body">Stripes</label>
                </div>
                 <div>
                    <input type="color" id="body" name="body"
                            value="#f6b73c" />
                    <label for="body">Soul</label>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default App;
