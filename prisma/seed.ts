import { prisma } from "../src/lib/prisma";

async function seed() {
  await prisma.event.create({
    data: {
      title: "Event 1",
      slug: "event-1",
      details: "Event 1 details",
      maximumAttendees: 100,
      id: "e7f92c1a-1479-46ff-832d-3aac2c383027",
    },
  });
}

seed().then(() => {
  console.log("Database seeded successfully");
  prisma.$disconnect();
});
