// export class DarkTheme {
//     headerStyle = 'text-amber-300 header-text'
//     bgColor = 'bg-slate-800'
//     textColor = 'text-white'
//     buttonStyle = `
//     duration-600 relative transform transition-all ease-in-out 
//     bg-transparent 
//     hover:bg-amber-300 text-amber-300 font-semibold 
//     hover:text-slate-800 py-2 px-4 border border-amber-300 
//     hover:border-transparent rounded-lg`
// }

// export class LightTheme {
//     headerStyle = 'text-style-light header-text'
//     bgColor = 'bg-white'
//     textColor = 'text-slate-800'
//     buttonStyle = `
//     duration-600 relative transform transition-all ease-in-out 
//     bg-transparent 
//     hover:bg-amber-300 text-amber-300 font-semibold 
//     hover:text-slate-800 py-2 px-4 border border-amber-300 
//     hover:border-transparent rounded-lg`
// }

export default class Theme {
    headerStyle = 'text-amber-300 header-text'
    headerStyle2 = 'header-text'
    bgColor = 'bg-slate-800'
    textColor = 'text-white'
    textColor2 = 'text-sky-900'
    buttonStyle = `
    duration-600 relative transform transition-all ease-in-out 
    bg-transparent 
    hover:bg-blue-4 text-amber-300 font-semibold 
    hover:text-slate-800 py-2 px-4 border border-amber-300 
    hover:border-transparent rounded-lg`
    borderStyle = 'border-amber-300 rounded-lg border'
    headerColor = 'text-amber-300'

    buttonStyle2 = `
                duration-600 relative transform transition-all ease-in-out 
                bg-blue-4 
                hover:bg-white text-sky-900 font-semibold 
                py-2 px-4 border border-sky-900 
                hover:border-sky-300 rounded-lg`
                borderStyle2 = 'border-sky-900 rounded-lg border'
                headerColor2 = 'text-sky-900'

    constructor(theme) {
        switch (theme) {
            case 'dark':
                this.headerStyle = 'text-amber-300 header-text'
                this.bgColor = 'bg-slate-800'
                this.textColor = 'text-white'
                this.buttonStyle = `
                duration-600 relative transform transition-all ease-in-out 
                bg-transparent 
                hover:bg-amber-300 text-amber-300 font-semibold 
                hover:text-slate-800 py-2 px-4 border border-amber-300 
                hover:border-transparent rounded-lg`
                this.borderStyle = 'border-amber-300 rounded-lg border'
                break;
        
            case 'light':
                this.headerStyle = 'header-text-blue-4 header-text drop-shadow-lg'
                this.headerStyle2 = 'text-sky-900 header-text drop-shadow-lg'
                this.headerColor = 'header-text-blue-4'
                this.bgColor = 'bg-sky-900'
                this.textColor = 'text-white'
                this.buttonStyle = `
                duration-600 relative transform transition-all ease-in-out 
                bg-transparent 
                hover:bg-amber-300 text-amber-300 font-semibold 
                hover:text-slate-800 py-2 px-4 border border-amber-300 
                hover:border-blue-4 rounded-lg`
                this.borderStyle = 'border-blue-4 rounded-lg border'
                break;

            
            default:
                break;
        }
    }
}