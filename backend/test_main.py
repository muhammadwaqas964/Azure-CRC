import unittest
from main import main
from azure.functions import HttpRequest

class TestMainFunction(unittest.TestCase):

    def test_main_function(self):
        req = HttpRequest(
            method='GET',
            url='/api/test',
            body=None,
            params={}
        )
        response = main(req)
        self.assertEqual(response.status_code, 200)

if __name__ == '__main__':
    unittest.main()

