import { connectClient, stopClient } from "../server/db";

async function main() {
  const client = await connectClient();

  await client.collection("books").deleteMany({});

  const resp = await client.collection("books").insertMany([
    {
      id: "the-art-of-war",
      title: "The Art of War",
      author: "Sun Tzu",
      description: `The Art of War is a classic Chinese military strategy book written by Sun Tzu. The book is composed of 13 chapters and covers all aspects of warfare, from planning and logistics to tactics and the use of spies. Despite being over 2,500 years old, "The Art of War" is still widely read and studied by military leaders and strategists today.`,
      genres: ["Military Strategy", "Classics"],
    },
    {
      id: "the-hobbit",
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      description: `"The Hobbit" is a fantasy novel written by J.R.R. Tolkien. It follows the journey of the hobbit Bilbo Baggins as he accompanies a group of dwarves on a quest to reclaim their stolen treasure from the dragon Smaug. Along the way, they encounter trolls, goblins, and a mysterious creature named Gollum. "The Hobbit" is a prequel to Tolkien's more famous work, "The Lord of the Rings.`,
      genres: ["Fantasy", "Adventure"],
    },
    {
      id: "to-kill-a-mockingbird",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      description: `To Kill a Mockingbird" is a novel by Harper Lee. It is set in the 1930s in the fictional town of Maycomb, Alabama, and follows the story of a young girl named Scout Finch as she learns about racism and injustice in her community. The book is considered a classic of modern American literature and has won numerous awards, including the Pulitzer Prize. `,
      genres: ["Literary Fiction", "Historical Fiction"],
    },
  ]);

  console.info("Inserted Books:", resp.insertedCount);

  stopClient();
}

main();
