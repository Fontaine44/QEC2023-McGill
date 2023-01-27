const baseURL = "http://127.0.0.1:5000/"

export const apiPOST = async (endpoint, body) => {
    try{
        const res = await fetch(baseURL+endpoint, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        console.log(res)
        if (res.ok) {
            const data = await res.json()
            return {
                data: data,
                success: true
            }
        } else {
            return {
                data: null,
                success: false
            }
        }
        

        }
        catch (e) {
            //
        }
 };