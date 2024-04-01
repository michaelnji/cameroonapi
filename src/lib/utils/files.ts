import {loadJsonFile} from 'load-json-file';

export async function loadDatabase(filename:string){
    try {
        const data = await loadJsonFile(filename)
        return data
    } catch (error) {
        return error
    }
}
