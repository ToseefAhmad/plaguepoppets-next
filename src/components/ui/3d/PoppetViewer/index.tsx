"use client"

/*
TODO: Use BabylonJS to populate the canvas with a 3D model of the poppet.

NOTE: The className bg-slate-50 is just to be able to see the canvas on the page for now.
*/

interface IPoppetViewer{
    poppetGLTF: any;
    stageGLTF?: any | null;
}

export const PoppetViewer = ({poppetGLTF, stageGLTF}: IPoppetViewer) => {

    return (
        <div className={`w-full`}>
            <h2>Poppet Viewer</h2>
            <canvas id="poppetViewer" className={`w-full bg-slate-50`}>

            </canvas>
        </div>
    )
}