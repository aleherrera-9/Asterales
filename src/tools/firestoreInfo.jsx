import db from './fireBaseConfig'
import { query, where, collection, getDocs} from '@firebase/firestore';
import { doc, getDoc } from "firebase/firestore";

export const fetchFirestore =async(idCategory)=>{
    let newArray;

    if (idCategory) {
        newArray = query(collection(db, "products"), where('productId', '==', idCategory));
    } else {
        newArray = query(collection(db, "products"));
    }

    const querySnapshot =await getDocs(newArray);

    const firestoreData= querySnapshot.docs.map((doc)=>({
        id:doc.id,
        ...doc.data()
    })); 

    return firestoreData;
}

export const fetchFirestoreItemDetail = async (itemId) => {
    
    const docRef = doc(db, "products", itemId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
          id: itemId,
          ...docSnap.data()
      }
    } else {
      console.log("No existe este producto.");
    }

}