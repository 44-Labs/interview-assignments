import json
import random
from datetime import datetime, timedelta
import os

golf_courses = [
    "마우나오션", "제주클럽", "블루헤런", "레이크우드", "베어크리크",
    "남촌", "서울", "아시아나", "안양", "남서울", "일동레이크", "이스트밸리"
]

sources = ["DONGA", "ACE", "KLPGA", "KGA"]

def generate_random_price():
    return random.randint(20000, 50000)

def generate_random_delta():
    return random.randint(-500, 500)

def generate_random_date():
    days_ago = random.randint(0, 5)  # 최근 5일 이내
    date = datetime.utcnow() - timedelta(days=days_ago)
    return date.isoformat() + "Z"  # Zulu time 표기

data = []

for course in golf_courses:
    selected_sources = random.sample(sources, k=random.randint(2, 3))  # 2~3개 거래소 랜덤 선택
    for source in selected_sources:
        entry = {
            "golfCourseName": course,
            "currentPrice": generate_random_price(),
            "delta": generate_random_delta(),
            "source": source,
            "collectedAt": generate_random_date()
        }
        data.append(entry)

# 저장 경로
output_dir = os.path.join(os.path.dirname(__file__), "../public")
os.makedirs(output_dir, exist_ok=True)
output_path = os.path.join(output_dir, "sample-data.json")

# JSON 파일로 저장
with open(output_path, "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"✅ Sample data ({len(data)} entries) generated at {output_path}")
