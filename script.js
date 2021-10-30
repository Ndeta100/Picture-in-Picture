const videoElement=document.getElementById('video')
const button=document.getElementById('button')

// Prompt the user to select a media streamm, pass to video element and play

async function selectMediaStream(){
    try {
        const mediaStream=await navigator.mediaDevices.getDisplayMedia()
        videoElement.srcObject=mediaStream
        videoElement.onloadedmetadata=()=>{
            videoElement.play()
        }
    } catch (error) {
        console.log('Sorry error her', error)
    }
}
async function disable(){
    // disable btn
    button.disabled=true
    // Start picture in picture
    await videoElement.requestPictureInPicture()
    // resets btn
    button.disabled=false
}
button.addEventListener('click', disable)

// onload
selectMediaStream()