import express from 'express'

const router = express.Router()

const formHtml = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Name API Demo</title>
    <style>
      body { font-family: Arial, sans-serif; padding: 30px; }
      input { padding: 10px; width: 220px; margin-right: 10px; }
      button { padding: 10px 16px; }
      #result { margin-top: 20px; font-size: 20px; color: #1a73e8; }
    </style>
  </head>
  <body>
    <h2>Enter your name</h2>
    <input type="text" id="nameInput" placeholder="Type your name" />
    <button id="submitBtn">Show</button>
    <p id="result"></p>

    <script>
      const button = document.getElementById('submitBtn');
      const input = document.getElementById('nameInput');
      const result = document.getElementById('result');

      button.addEventListener('click', async () => {
        const name = input.value.trim();

        if (!name) {
          result.textContent = 'Please enter a name';
          return;
        }

        const response = await fetch('/api/name', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name })
        });

        const data = await response.json();
        result.textContent = data.message;
      });
    </script>
  </body>
</html>
`;

router.get('/', (req, res) => {
    res.send(formHtml)
})

router.get('/about', (req, res) =>{
    res.send('This is About Page')
})

router.get('/students', (req, res) =>{
    res.send('Students List')
})

router.get('/students/:id', (req, res) =>{
    res.send(`Students id: ${req.params.id}`)
})

router.post('/api/name', (req, res) => {
    const { name } = req.body

    if (!name) {
        return res.status(400).json({ message: 'Name is required' })
    }

    res.json({
        message: `Hello ${name}!`,
        name
    })
})

router.get('/api/name', (req, res) => {
    const { name } = req.query

    if (!name) {
        return res.status(400).json({ message: 'Name is required' })
    }

    res.json({
        message: `Hello ${name}!`,
        name
    })
})

export default router
