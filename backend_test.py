#!/usr/bin/env python3
"""
Comprehensive Backend API Testing for BlueSky QA & Marketing Agency
Tests all API endpoints for functionality, data structure, and error handling
"""

import requests
import json
import sys
from datetime import datetime

# Backend URL from environment
BACKEND_URL = "http://localhost:8001"

class BackendTester:
    def __init__(self):
        self.base_url = BACKEND_URL
        self.test_results = []
        self.failed_tests = []
        
    def log_test(self, test_name, status, message="", response_data=None):
        """Log test results"""
        result = {
            "test": test_name,
            "status": status,
            "message": message,
            "timestamp": datetime.now().isoformat()
        }
        if response_data:
            result["response_data"] = response_data
        
        self.test_results.append(result)
        
        if status == "PASS":
            print(f"✅ {test_name}: {message}")
        else:
            print(f"❌ {test_name}: {message}")
            self.failed_tests.append(result)
    
    def test_health_endpoint(self):
        """Test GET /api/health"""
        try:
            response = requests.get(f"{self.base_url}/api/health", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if "status" in data and data["status"] == "healthy":
                    self.log_test("Health Check", "PASS", "Health endpoint working correctly", data)
                    return True
                else:
                    self.log_test("Health Check", "FAIL", f"Unexpected response structure: {data}")
            else:
                self.log_test("Health Check", "FAIL", f"HTTP {response.status_code}: {response.text}")
        except Exception as e:
            self.log_test("Health Check", "FAIL", f"Connection error: {str(e)}")
        return False
    
    def test_services_endpoints(self):
        """Test all services endpoints"""
        # Test GET /api/services (all services)
        try:
            response = requests.get(f"{self.base_url}/api/services", timeout=10)
            if response.status_code == 200:
                services = response.json()
                if isinstance(services, list):
                    self.log_test("Get All Services", "PASS", f"Retrieved {len(services)} services")
                    
                    # Validate service structure
                    if services:
                        service = services[0]
                        required_fields = ["id", "title", "description", "category", "features"]
                        if all(field in service for field in required_fields):
                            self.log_test("Service Data Structure", "PASS", "All required fields present")
                        else:
                            missing = [f for f in required_fields if f not in service]
                            self.log_test("Service Data Structure", "FAIL", f"Missing fields: {missing}")
                else:
                    self.log_test("Get All Services", "FAIL", "Response is not a list")
            else:
                self.log_test("Get All Services", "FAIL", f"HTTP {response.status_code}: {response.text}")
        except Exception as e:
            self.log_test("Get All Services", "FAIL", f"Connection error: {str(e)}")
        
        # Test GET /api/services/qa
        try:
            response = requests.get(f"{self.base_url}/api/services/qa", timeout=10)
            if response.status_code == 200:
                qa_services = response.json()
                if isinstance(qa_services, list):
                    qa_count = len([s for s in qa_services if s.get("category") == "qa"])
                    self.log_test("Get QA Services", "PASS", f"Retrieved {qa_count} QA services")
                else:
                    self.log_test("Get QA Services", "FAIL", "Response is not a list")
            else:
                self.log_test("Get QA Services", "FAIL", f"HTTP {response.status_code}: {response.text}")
        except Exception as e:
            self.log_test("Get QA Services", "FAIL", f"Connection error: {str(e)}")
        
        # Test GET /api/services/marketing
        try:
            response = requests.get(f"{self.base_url}/api/services/marketing", timeout=10)
            if response.status_code == 200:
                marketing_services = response.json()
                if isinstance(marketing_services, list):
                    marketing_count = len([s for s in marketing_services if s.get("category") == "marketing"])
                    self.log_test("Get Marketing Services", "PASS", f"Retrieved {marketing_count} marketing services")
                else:
                    self.log_test("Get Marketing Services", "FAIL", "Response is not a list")
            else:
                self.log_test("Get Marketing Services", "FAIL", f"HTTP {response.status_code}: {response.text}")
        except Exception as e:
            self.log_test("Get Marketing Services", "FAIL", f"Connection error: {str(e)}")
    
    def test_testimonials_endpoint(self):
        """Test GET /api/testimonials"""
        try:
            response = requests.get(f"{self.base_url}/api/testimonials", timeout=10)
            if response.status_code == 200:
                testimonials = response.json()
                if isinstance(testimonials, list):
                    self.log_test("Get Testimonials", "PASS", f"Retrieved {len(testimonials)} testimonials")
                    
                    # Validate testimonial structure
                    if testimonials:
                        testimonial = testimonials[0]
                        required_fields = ["id", "name", "company", "role", "content", "rating"]
                        if all(field in testimonial for field in required_fields):
                            self.log_test("Testimonial Data Structure", "PASS", "All required fields present")
                        else:
                            missing = [f for f in required_fields if f not in testimonial]
                            self.log_test("Testimonial Data Structure", "FAIL", f"Missing fields: {missing}")
                else:
                    self.log_test("Get Testimonials", "FAIL", "Response is not a list")
            else:
                self.log_test("Get Testimonials", "FAIL", f"HTTP {response.status_code}: {response.text}")
        except Exception as e:
            self.log_test("Get Testimonials", "FAIL", f"Connection error: {str(e)}")
    
    def test_blog_endpoint(self):
        """Test GET /api/blog"""
        try:
            response = requests.get(f"{self.base_url}/api/blog", timeout=10)
            if response.status_code == 200:
                blog_posts = response.json()
                if isinstance(blog_posts, list):
                    self.log_test("Get Blog Posts", "PASS", f"Retrieved {len(blog_posts)} blog posts")
                    
                    # Validate blog post structure
                    if blog_posts:
                        post = blog_posts[0]
                        required_fields = ["id", "title", "content", "category", "author"]
                        if all(field in post for field in required_fields):
                            self.log_test("Blog Post Data Structure", "PASS", "All required fields present")
                        else:
                            missing = [f for f in required_fields if f not in post]
                            self.log_test("Blog Post Data Structure", "FAIL", f"Missing fields: {missing}")
                else:
                    self.log_test("Get Blog Posts", "FAIL", "Response is not a list")
            else:
                self.log_test("Get Blog Posts", "FAIL", f"HTTP {response.status_code}: {response.text}")
        except Exception as e:
            self.log_test("Get Blog Posts", "FAIL", f"Connection error: {str(e)}")
    
    def test_contact_form_endpoint(self):
        """Test POST /api/contact"""
        # Sample contact form data
        contact_data = {
            "name": "John Doe",
            "email": "john.doe@example.com",
            "company": "Test Company",
            "service_interest": "qa",
            "message": "I'm interested in your QA automation services. Please contact me for a consultation."
        }
        
        try:
            response = requests.post(
                f"{self.base_url}/api/contact",
                json=contact_data,
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            if response.status_code == 200:
                result = response.json()
                if result.get("status") == "success":
                    self.log_test("Contact Form Submission", "PASS", "Contact form submitted successfully")
                else:
                    self.log_test("Contact Form Submission", "FAIL", f"Unexpected response: {result}")
            else:
                self.log_test("Contact Form Submission", "FAIL", f"HTTP {response.status_code}: {response.text}")
        except Exception as e:
            self.log_test("Contact Form Submission", "FAIL", f"Connection error: {str(e)}")
        
        # Test with invalid data (missing required fields)
        invalid_data = {"name": "Test"}
        try:
            response = requests.post(
                f"{self.base_url}/api/contact",
                json=invalid_data,
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            if response.status_code == 422:  # FastAPI validation error
                self.log_test("Contact Form Validation", "PASS", "Properly validates required fields")
            else:
                self.log_test("Contact Form Validation", "FAIL", f"Expected 422, got {response.status_code}")
        except Exception as e:
            self.log_test("Contact Form Validation", "FAIL", f"Connection error: {str(e)}")
    
    def test_case_studies_endpoints(self):
        """Test case studies endpoints"""
        # Test GET /api/case-studies (all case studies)
        try:
            response = requests.get(f"{self.base_url}/api/case-studies", timeout=10)
            if response.status_code == 200:
                case_studies = response.json()
                if isinstance(case_studies, list):
                    self.log_test("Get All Case Studies", "PASS", f"Retrieved {len(case_studies)} case studies")
                    
                    # Validate case study structure
                    if case_studies:
                        case_study = case_studies[0]
                        required_fields = ["id", "title", "client", "description", "results", "category"]
                        if all(field in case_study for field in required_fields):
                            self.log_test("Case Study Data Structure", "PASS", "All required fields present")
                        else:
                            missing = [f for f in required_fields if f not in case_study]
                            self.log_test("Case Study Data Structure", "FAIL", f"Missing fields: {missing}")
                else:
                    self.log_test("Get All Case Studies", "FAIL", "Response is not a list")
            else:
                self.log_test("Get All Case Studies", "FAIL", f"HTTP {response.status_code}: {response.text}")
        except Exception as e:
            self.log_test("Get All Case Studies", "FAIL", f"Connection error: {str(e)}")
        
        # Test GET /api/case-studies/qa
        try:
            response = requests.get(f"{self.base_url}/api/case-studies/qa", timeout=10)
            if response.status_code == 200:
                qa_cases = response.json()
                if isinstance(qa_cases, list):
                    self.log_test("Get QA Case Studies", "PASS", f"Retrieved {len(qa_cases)} QA case studies")
                else:
                    self.log_test("Get QA Case Studies", "FAIL", "Response is not a list")
            else:
                self.log_test("Get QA Case Studies", "FAIL", f"HTTP {response.status_code}: {response.text}")
        except Exception as e:
            self.log_test("Get QA Case Studies", "FAIL", f"Connection error: {str(e)}")
        
        # Test GET /api/case-studies/marketing
        try:
            response = requests.get(f"{self.base_url}/api/case-studies/marketing", timeout=10)
            if response.status_code == 200:
                marketing_cases = response.json()
                if isinstance(marketing_cases, list):
                    self.log_test("Get Marketing Case Studies", "PASS", f"Retrieved {len(marketing_cases)} marketing case studies")
                else:
                    self.log_test("Get Marketing Case Studies", "FAIL", "Response is not a list")
            else:
                self.log_test("Get Marketing Case Studies", "FAIL", f"HTTP {response.status_code}: {response.text}")
        except Exception as e:
            self.log_test("Get Marketing Case Studies", "FAIL", f"Connection error: {str(e)}")
    
    def test_init_data_endpoint(self):
        """Test POST /api/init-data"""
        try:
            response = requests.post(f"{self.base_url}/api/init-data", timeout=10)
            if response.status_code == 200:
                result = response.json()
                if result.get("status") == "success":
                    self.log_test("Initialize Sample Data", "PASS", "Sample data initialized successfully")
                else:
                    self.log_test("Initialize Sample Data", "FAIL", f"Unexpected response: {result}")
            else:
                self.log_test("Initialize Sample Data", "FAIL", f"HTTP {response.status_code}: {response.text}")
        except Exception as e:
            self.log_test("Initialize Sample Data", "FAIL", f"Connection error: {str(e)}")
    
    def test_cors_headers(self):
        """Test CORS headers"""
        try:
            response = requests.options(f"{self.base_url}/api/health", timeout=10)
            cors_headers = {
                "Access-Control-Allow-Origin": response.headers.get("Access-Control-Allow-Origin"),
                "Access-Control-Allow-Methods": response.headers.get("Access-Control-Allow-Methods"),
                "Access-Control-Allow-Headers": response.headers.get("Access-Control-Allow-Headers")
            }
            
            if cors_headers["Access-Control-Allow-Origin"]:
                self.log_test("CORS Configuration", "PASS", f"CORS headers present: {cors_headers}")
            else:
                self.log_test("CORS Configuration", "FAIL", "CORS headers missing")
        except Exception as e:
            self.log_test("CORS Configuration", "FAIL", f"Connection error: {str(e)}")
    
    def test_mongodb_connection(self):
        """Test MongoDB connection by checking if data persists"""
        # First initialize data
        self.test_init_data_endpoint()
        
        # Then check if we can retrieve the data
        try:
            response = requests.get(f"{self.base_url}/api/services", timeout=10)
            if response.status_code == 200:
                services = response.json()
                if len(services) > 0:
                    self.log_test("MongoDB Data Persistence", "PASS", f"Data persisted successfully - {len(services)} services found")
                else:
                    self.log_test("MongoDB Data Persistence", "FAIL", "No data found after initialization")
            else:
                self.log_test("MongoDB Data Persistence", "FAIL", f"Could not retrieve data: HTTP {response.status_code}")
        except Exception as e:
            self.log_test("MongoDB Data Persistence", "FAIL", f"Connection error: {str(e)}")
    
    def run_all_tests(self):
        """Run all backend API tests"""
        print("🚀 Starting BlueSky Backend API Tests...")
        print("=" * 60)
        
        # Test in logical order
        self.test_health_endpoint()
        self.test_cors_headers()
        self.test_mongodb_connection()
        self.test_services_endpoints()
        self.test_testimonials_endpoint()
        self.test_blog_endpoint()
        self.test_contact_form_endpoint()
        self.test_case_studies_endpoints()
        
        # Print summary
        print("\n" + "=" * 60)
        print("📊 TEST SUMMARY")
        print("=" * 60)
        
        total_tests = len(self.test_results)
        passed_tests = len([t for t in self.test_results if t["status"] == "PASS"])
        failed_tests = len(self.failed_tests)
        
        print(f"Total Tests: {total_tests}")
        print(f"Passed: {passed_tests}")
        print(f"Failed: {failed_tests}")
        print(f"Success Rate: {(passed_tests/total_tests)*100:.1f}%")
        
        if self.failed_tests:
            print("\n❌ FAILED TESTS:")
            for test in self.failed_tests:
                print(f"  - {test['test']}: {test['message']}")
        
        return failed_tests == 0

if __name__ == "__main__":
    tester = BackendTester()
    success = tester.run_all_tests()
    
    if success:
        print("\n🎉 All tests passed! Backend API is working correctly.")
        sys.exit(0)
    else:
        print(f"\n⚠️  {len(tester.failed_tests)} test(s) failed. Please check the issues above.")
        sys.exit(1)