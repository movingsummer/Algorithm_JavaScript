# [Silver II] 지구 온난화 - 5212 

[문제 링크](https://www.acmicpc.net/problem/5212) 

### 성능 요약

메모리: 9348 KB, 시간: 144 ms

### 분류

구현, 시뮬레이션

### 문제 설명

<p>A popular tourist destination country is situated on a breathtakingly beautiful archipelago constantly bathed by the sun. The country's residents are very proud of their numerous islands. However, global warming has them very worried: raising sea levels are resulting in rapidly increasing loss of dry land, which is diminishing the beauty of the archipelago.</p>

<p>The map of the archipelago is represented by a grid of R by C squares (characters). The character 'X' (uppercase letter x) represents dry land, while '.' (period) represents sea.</p>

<p>It has been estimated that, in fifty years, sea will have flooded every square of land that is currently surrounded by sea on three or on all four sides (north, south, east, west). Assume that all squares outside the map (along the edges) are covered by sea.</p>

<p>Your task is computing the map of the archipelago in fifty years (after the described sea level rise). </p>

<p>Since there will probably be less land than today, you shouldn't print out the whole map, but only its smallest rectangular part that contains all land squares. It is guaranteed that at least one square of land will remain in all test cases.</p>

### 입력 

 <p>The first line of input contains two positive integers, R and C (1 ≤ R, C ≤ 10), the dimensions of the current map.</p>

<p>Each of the following R lines contains C characters. These R by C characters represent the current map of the archipelago.</p>

### 출력 

 <p>The output must contain an appropriate number of lines representing the required rectangular part of the future (flooded) map.</p>

