import json
import os
from datetime import datetime

valid_sources = ["DONGA", "ACE", "KLPGA", "KGA"]

def validate_sample_data(filepath):
    if not os.path.exists(filepath):
        print(f"❌ 파일이 존재하지 않습니다: {filepath}")
        return

    with open(filepath, "r", encoding="utf-8") as f:
        try:
            data = json.load(f)
        except json.JSONDecodeError as e:
            print(f"❌ JSON 파싱 오류: {e}")
            return

    all_valid = True

    for idx, item in enumerate(data):
        if not all(k in item for k in ["golfCourseName", "currentPrice", "delta", "source", "collectedAt"]):
            print(f"❌ {idx}번 레코드: 필수 키 누락")
            all_valid = False
            continue

        if not isinstance(item["currentPrice"], int) or item["currentPrice"] <= 0:
            print(f"❌ {idx}번 레코드: currentPrice 값 이상 -> {item['currentPrice']}")
            all_valid = False

        if item["source"] not in valid_sources:
            print(f"❌ {idx}번 레코드: 잘못된 source 값 -> {item['source']}")
            all_valid = False

        try:
            datetime.fromisoformat(item["collectedAt"].replace("Z", "+00:00"))
        except ValueError:
            print(f"❌ {idx}번 레코드: 잘못된 collectedAt 포맷 -> {item['collectedAt']}")
            all_valid = False

    if all_valid:
        print("✅ 데이터셋이 정상입니다!")
    else:
        print("⚠️ 데이터셋에 문제가 있습니다. 위 오류를 확인하세요.")

# 사용 예시
if __name__ == "__main__":
    validate_sample_data("./public/sample-data.json")
