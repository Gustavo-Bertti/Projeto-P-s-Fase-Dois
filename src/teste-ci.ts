import { appDataSource } from "@/lib/typeorm/typeorm"  

async function main() {
  try {
    await appDataSource.initialize()
    console.log('Data Base with TypeORM connected successfully')
    await appDataSource.destroy()  
    process.exit(0)
  } catch (error) {
    console.error('Error connecting to the Data Base with TypeORM:', error)
    process.exit(1)
  }
}

main()