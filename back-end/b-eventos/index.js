import express from 'express'
import cors from 'cors'




const app = express()
app.use(express.json())
app.use(cors())



app.post('/help-offer', async (req, res) => {
    res.sendStatus(201).send(await cPostHelpOffer.postHelpOffer(req.body))
})

app.post('/interest', async (req, res) => {
    res.sendStatus(201).send(await cPostInterest.postInterest(req.body))
})

app.get("/hey-docker", async (req, res) => {
    res.status(200).json({
        mensagem: "Hey, Docker!!",
})
})
app.get('/interests', async (req, res) => {
    res.send(await cGetInterests.getInterest(req.body))
})

app.listen(8080, () => {
    console.log("Porta 8080")
})