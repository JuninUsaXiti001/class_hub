export async function creatCdnUpload(file:File) : Promise<any> {
    const token = 'e19f96b3435f0fb5978fa149223b089e4a364697-a8930f934db0e639d6c839604afea5a51edc258fd51e5e50c5078e579fb7799f'

    if (!token) {
        throw new Error("Token não definido")
    }

    const formData = new FormData()
    formData.append("file", file)

    const req = await fetch('https://blob.squarecloud.app/v1/objects', {
        method: 'POST',
        headers: {
            'Authorization': token
            // ,'Content-Type': 'application/json'
        },
        body: formData
    })

    const result = await req.json()

    return result
}