## Project Introduction
Hi there, this project is part of the "[Your First Open-Source Contribution](https://blog.afrieirham.com/your-first-open-source-contribution)" article on Hashnode.

Before you start, I would like to thank you for participating in this small project of mine – I really appreciate it.

I hope by doing this you'll learn how to contribute to an open-source projects and continue to contribute more in open-source projects.

## Getting Started

**1. Create a new branch:**

```bash
# Create a branch with your github username
git checkout -b <your-github-username>

# Example
git checkout -b afrieirham
```

**2. Install dependencies:**

```bash
npm install
# or
yarn install
```

**3. Run the development server:**

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

**4. Create your json file:**

Copy the template below and create a file in `public/sign-here` with your GitHub username `github-username.json`

```json
{
  "body": "Change this with your comment",
  "date": ""
}
```

**Important**: I won't approve your PR if you don't use GitHub username for the file name.

**5. Adding the date:**

- For the date section, please go to this [link](https://greenwichmeantime.com/articles/clocks/iso/).
- Click on the "copy to clipboard" button.
- And paste it in the date section.

Your JSON file should look like this:

```json
{
  "body": "Change this with your comment",
  "date": "2022-04-04T23:25:49Z"
}
```
