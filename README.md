# Igilro Client

Igilro 프로젝트의 Client Repository 입니다.

# 주요 기능
<p align="center">
   <img width="934" height="446" alt="Image" src="https://github.com/user-attachments/assets/e5c634c6-1c7c-467d-9b25-3acc21a245fd" />
   <img width="934" height="520" alt="Image" src="https://github.com/user-attachments/assets/19371511-f188-4e6e-b263-942663a48538" />
   <img width="934" height="535" alt="Image" src="https://github.com/user-attachments/assets/92bab4a9-39f8-4178-8c0e-8bad5c8b8f9b" />
</p>

# 시스템 구성도
<p align="center">
   <img width="676" height="413" alt="Image" src="https://github.com/user-attachments/assets/9de553b2-3963-4b7d-b54f-07f66a6d67e1" />
</p>

# GitHub Role

해당 Repository는 다음과 같은 규칙을 따르고 있습니다.

## GitHub Branch

### 개발을 시작할 때

1. 개발을 시작할 때는 현재(Origin) Repository에서 Issue를 생성합니다.
   <img width="1024" alt="시작 1" src="https://github.com/SMU-2024-Capstone/front-end/assets/95129568/03c98844-c6b4-4e2f-987b-1689b83afb96">

2. 이후 Issue에서 Origin Repository의 Dev Branch에서 새로운 Branch를 생성합니다. **오른쪽 아래에 `Create a Branch`를 통해서 생성합니다!!**
   <img width="1024" alt="시작 2" src="https://github.com/SMU-2024-Capstone/front-end/assets/95129568/6afc180d-b4fa-41c2-b74a-b32125dab07e">

   - 이때 브랜치 이름은 다음을 따릅니다.
     - **새로운 기능 개발 : feature/#[Issue의 번호]**
     - **버그 픽스 : fix/#[Issue의 번호]**
     - **기능 리팩토링 : refactor/#[Issue의 번호]**

<img width="1024" alt="시작 3" src="https://github.com/SMU-2024-Capstone/front-end/assets/95129568/c4ceae8a-fd74-416a-adc3-5e1607684ae4">

3. Loacl에서 Fetch를 통해 만든 New Branch(feature or fix or refactor)을 들고옵니다.

```Shell
git fetch origin
```

4. 해당 Branch로 checkout 이후 기능 개발을 진행합니다.

```Shell
git checkout feature/#1 # 예시입니다.
```

### 개발을 종료할 때

1. 기능 개발이 종료되면 현재(Origin) Repository의 Branch(feature or fix or refactor)로 변경 사항을 Push 합니다.

```Shell
git push origin feature/#1 # 예시입니다.
```

2. 위에 보이는 Compare & Pull Request 버튼을 누릅니다!
   <img width="1024" alt="종료 1" src="https://github.com/SMU-2024-Capstone/front-end/assets/95129568/dc8ccecd-df50-4844-8854-172abe3726be">
3. Code Review 이후 마지막으로 Approve한 사람은 `Dev`로 `Merge`를 해줍니다.
   <img width="1024" alt="종료 2" src="https://github.com/SMU-2024-Capstone/front-end/assets/95129568/63da505c-c46a-41dd-9843-60a7c7614e95">
4. PR이 `Merge`되면 Local에서는 dev Branch로 checkout합니다.

```Shell
git checkout dev
```

5. Local에서 현재(Origin) Repository의 dev Branch를 pull 받습니다.

```Shell
git pull origin dev
```

## Branch Naming Convention

| Commit Type | Description      |
| ----------- | ---------------- |
| main        | 배포용           |
| dev         | 개발 커밋 통합용 |
| feature     | 기능 개발용      |
| fix         | 버그 수정용      |
| refactor    | 코드 리팩토링    |

## Commit Convention

| Commit Type | Description                                                                |
| ----------- | -------------------------------------------------------------------------- |
| feat        | Add new features                                                           |
| fix         | Fix bugs                                                                   |
| docs        | Modify documentation                                                       |
| style       | Code formatting, missing semicolons, no changes to the code itself         |
| refactor    | Code refactoring                                                           |
| test        | Add test code, refactor test code                                          |
| chore       | Modify package manager, and other miscellaneous changes (e.g., .gitignore) |
| design      | Change user UI design, such as CSS                                         |
| comment     | Add or modify necessary comments                                           |
| rename      | Only changes to file or folder names or locations                          |
| remove      | Only performing the action of deleting files                               |

## PR Convention

| Icon | Code       | Description                       |
| ---- | ---------- | --------------------------------- |
| 🎨   | :art       | Improve code structure/formatting |
| ⚡️  | :zap       | Performance improvement           |
| 🔥   | :fire      | Delete code/files                 |
| 🐛   | :bug       | Fix bugs                          |
| 🚑   | :ambulance | Urgent fixes                      |
| ✨   | :sparkles  | Introduce new features            |
| 💄   | :lipstick  | Add/modify UI/style files         |
