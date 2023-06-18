
import { firestore } from "$lib/firebase/server";
import { error, redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const cool = await firestore.collection("flavors").get();
    const snap = cool.docs.map((doc) => doc.data());
    // const snap = await db.ref("test").get();
    //     .then((snapshot) => {
    //     if (snapshot.exists()) {
    //         snap = snapshot.val() + "sdf";
    //         console.log(snapshot.val());
    //     }
    //     else {
    //         snap = "f";
    //         console.log("No data available");
    //     }
    // }).catch((error) => {
    //     snap = "F";
    //     console.error(error);
    // });
    // const snap = await done;
    return {
        props: {
            data: snap
        }
    }
};

function sendEmails(addr: string) {
    console.log("Sending email", addr);
    //throw redirect(303, '/implEmail');
}
/** @type {import('./$types').Actions} */
export const actions = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    default: async ({ request }: { request: Request }) => {
        // get the request body
        const data = await request.formData();


        console.log(data.get("flavor"));
        // console.log((await request.json());
        let flavor: string = data.get("flavor")?.toString() ?? "";
        flavor = flavor.replace(/\(.*/g, "").trim();

        const emailAddrListQuery = firestore.collection("requests").where("flavor", "==", flavor);
        const emailAddrList = await emailAddrListQuery.get();
        emailAddrList.forEach(async doc => {
            const addr = doc.get("email");
            if (addr !== "") {
                sendEmails(addr);
            }
            await doc.ref.delete();
        });

        // const date = new Date();
        // const mmddyyyy = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
        // // check if request already exists
        // const exists = await firestore.collection("requests").where("flavor", "==", flavor).where("email", "==", data.get("email")).get();
        // if (!exists.empty) {
        //     throw error(400, {
        //         message: `Exists already:${exists.docs.at(0)?.get("date")}`
        //     });
        // }
        // await firestore.collection("requests").add({
        //     flavor: flavor,
        //     email: useEmail ? data.get("email") : "",
        //     date: mmddyyyy
        // });
        throw redirect(303, '/request');
    }
};
