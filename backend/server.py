from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel
from typing import List, Optional
import os
from dotenv import load_dotenv
from datetime import datetime
import uuid

# Load environment variables
load_dotenv()

app = FastAPI(title="BlueSky QA & Marketing Agency API")

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB connection
mongo_url = os.environ.get('MONGO_URL')
client = AsyncIOMotorClient(mongo_url)
db = client.bluesky_db

# Pydantic models
class Service(BaseModel):
    id: Optional[str] = None
    title: str
    description: str
    category: str  # "qa" or "marketing"
    features: List[str]
    icon: Optional[str] = None

class Testimonial(BaseModel):
    id: Optional[str] = None
    name: str
    company: str
    role: str
    content: str
    rating: int
    image: Optional[str] = None

class BlogPost(BaseModel):
    id: Optional[str] = None
    title: str
    content: str
    category: str
    author: str
    published_date: Optional[datetime] = None
    featured_image: Optional[str] = None

class ContactMessage(BaseModel):
    id: Optional[str] = None
    name: str
    email: str
    company: Optional[str] = None
    message: str
    service_interest: Optional[str] = None
    created_at: Optional[datetime] = None

class CaseStudy(BaseModel):
    id: Optional[str] = None
    title: str
    client: str
    description: str
    results: str
    category: str  # "qa" or "marketing"
    image: Optional[str] = None
    metrics: Optional[dict] = None

# API Routes
@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "service": "BlueSky API"}

# Services endpoints
@app.get("/api/services", response_model=List[Service])
async def get_services():
    services = []
    async for service in db.services.find():
        service["id"] = service["_id"]
        services.append(Service(**service))
    return services

@app.get("/api/services/{category}")
async def get_services_by_category(category: str):
    services = []
    async for service in db.services.find({"category": category}):
        service["id"] = service["_id"]
        services.append(Service(**service))
    return services

# Testimonials endpoints
@app.get("/api/testimonials", response_model=List[Testimonial])
async def get_testimonials():
    testimonials = []
    async for testimonial in db.testimonials.find():
        testimonial["id"] = testimonial["_id"]
        testimonials.append(Testimonial(**testimonial))
    return testimonials

# Blog endpoints
@app.get("/api/blog", response_model=List[BlogPost])
async def get_blog_posts():
    posts = []
    async for post in db.blog_posts.find():
        post["id"] = post["_id"]
        posts.append(BlogPost(**post))
    return posts

# Contact endpoints
@app.post("/api/contact")
async def submit_contact(message: ContactMessage):
    message_dict = message.dict()
    message_dict["id"] = str(uuid.uuid4())
    message_dict["created_at"] = datetime.now()
    message_dict["_id"] = message_dict["id"]
    
    await db.contact_messages.insert_one(message_dict)
    return {"status": "success", "message": "Contact message submitted successfully"}

# Case studies endpoints
@app.get("/api/case-studies", response_model=List[CaseStudy])
async def get_case_studies():
    case_studies = []
    async for case_study in db.case_studies.find():
        case_study["id"] = case_study["_id"]
        case_studies.append(CaseStudy(**case_study))
    return case_studies

@app.get("/api/case-studies/{category}")
async def get_case_studies_by_category(category: str):
    case_studies = []
    async for case_study in db.case_studies.find({"category": category}):
        case_study["id"] = case_study["_id"]
        case_studies.append(CaseStudy(**case_study))
    return case_studies

# Initialize sample data
@app.post("/api/init-data")
async def initialize_sample_data():
    # Sample services
    sample_services = [
        {
            "_id": str(uuid.uuid4()),
            "title": "Manual Testing Excellence",
            "description": "Comprehensive manual testing services ensuring your software meets the highest quality standards",
            "category": "qa",
            "features": ["Functional Testing", "Usability Testing", "Exploratory Testing", "Regression Testing"]
        },
        {
            "_id": str(uuid.uuid4()),
            "title": "Test Automation Framework",
            "description": "Robust automation testing solutions to accelerate your testing processes",
            "category": "qa",
            "features": ["API Testing", "UI Automation", "Performance Testing", "CI/CD Integration"]
        },
        {
            "_id": str(uuid.uuid4()),
            "title": "Digital Marketing Mastery",
            "description": "Complete digital marketing solutions to grow your online presence",
            "category": "marketing",
            "features": ["SEO Optimization", "Content Marketing", "Email Campaigns", "Analytics"]
        },
        {
            "_id": str(uuid.uuid4()),
            "title": "Social Media Excellence",
            "description": "Strategic social media management to build your brand community",
            "category": "marketing",
            "features": ["Content Creation", "Community Management", "Social Advertising", "Influencer Partnerships"]
        }
    ]
    
    await db.services.insert_many(sample_services)
    
    # Sample testimonials
    sample_testimonials = [
        {
            "_id": str(uuid.uuid4()),
            "name": "Sarah Johnson",
            "company": "TechStart Inc",
            "role": "CTO",
            "content": "BlueSky transformed our QA process completely. Their automation framework reduced our testing time by 70%.",
            "rating": 5
        },
        {
            "_id": str(uuid.uuid4()),
            "name": "Michael Chen",
            "company": "GrowthCorp",
            "role": "Marketing Director",
            "content": "The digital marketing strategies from BlueSky increased our lead generation by 300% in just 6 months.",
            "rating": 5
        }
    ]
    
    await db.testimonials.insert_many(sample_testimonials)
    
    return {"status": "success", "message": "Sample data initialized"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)