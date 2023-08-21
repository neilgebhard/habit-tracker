const { PrismaClient } = require('@prisma/client')

const db = new PrismaClient()

async function main() {
  try {
    await db.user.create({
      data: {
        id: 'user_2UEAtHDXkuqISfaw7shVkyepx1p',
        name: 'Neil Gebhard',
        email: 'neilgebhard@gmail.com',
        // createdAt: new Date(),
      },
    })
  } catch (error) {
    console.error('Error seeding default user:', error)
  } finally {
    await db.$disconnect()
  }
}

main()
