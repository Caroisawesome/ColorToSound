const OPTIONS = () => { return {

    color: {
	blue: { label: "Blue", value: "blue" },
	yellow: { label: "Yellow", value: "yellow"},
	magenta: { label: "Magenta", value: "magenta"}
    },

    effect: {
	distortion: { label:"Distortion", value: "Distortion"},
	tremolo: { label:"Tremolo", value: "Temolo"},
	phaser: { label:"Phaser", value: "Phaser"},
	chorus: { label:"Chorus", value: "Chorus"}
    },

    scale: {
	cMaj: {label: "C Major", value: ["C3","D3","E3","F3","G3","A3","B3","C4","D4","E4","F4","G4","A4","B4"]},
	cMin: {label: "C Minor", value: ["C3","D3","Eb3","F3","G3","Ab3","Bb3","C4","D4","Eb4","F4","G4","Ab4","Bb4"]},
    }

    // TODO: octaveRange?  instrument? 
}};

export default OPTIONS;
