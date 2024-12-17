import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const loadNotes = async (uid='') =>{
    if(!uid) throw new Error('No hay un UID en el estado');
    //traigo una colección de notas
    const collectionRef = collection(FirebaseDB,`${uid}/journal/notas`);
    //traigo los documentos de la colección
    const docs = await getDocs(collectionRef);

    const notes=[]
    docs.forEach(doc => {
        notes.push({
            id:doc.id,
            ...doc.data()
        })
    });
    
    return notes;
}