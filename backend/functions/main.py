import logging
import os
import azure.functions as func
from azure.cosmos import CosmosClient
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    # Initialize the Cosmos client using environment variables
    endpoint = os.getenv("AZURE_COSMOS_ENDPOINT")
    key = os.getenv("AZURE_COSMOS_KEY")
    client = CosmosClient(endpoint, key)

    # Select the database and container
    database_name = 'VisitorCountDB'
    container_name = 'VisitorCount'
    database = client.get_database_client(database_name)
    container = database.get_container_client(container_name)

    # Read the item from the container
    item = container.read_item(item='1', partition_key='1')
    item['count'] += 1

    # Update the item in the container
    container.upsert_item(item)

    return func.HttpResponse(f"Visitor count: {item['count']}", status_code=200)

