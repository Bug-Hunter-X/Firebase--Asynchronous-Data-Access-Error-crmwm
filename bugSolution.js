To avoid this error, always make sure to handle the promise returned by asynchronous operations like `getDoc()` using `.then()`. This ensures your code only tries to access data after it has been fully loaded.  Here's how you can fix the code:

```javascript
import { getDoc, doc } from "firebase/firestore";

async function getData(docRef) {
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    console.log("Document data:", data);
    // Access data properties here - data is guaranteed to be loaded
  } else {
    console.log("No such document!");
  }
}

// Example usage
const docRef = doc(db, "collection", "documentId");
getData(docRef);
```
By using `async/await` and placing the data access within the `.then()` block (or with `await` as shown above), you guarantee the data is available before your code attempts to access it.