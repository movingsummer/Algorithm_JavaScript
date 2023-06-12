# [Silver IV] 개미 - 3048 

[문제 링크](https://www.acmicpc.net/problem/3048) 

### 성능 요약

메모리: 9340 KB, 시간: 144 ms

### 분류

구현, 시뮬레이션, 문자열

### 문제 설명

<p>When moving, ants form rows so that each ant except the first is behind another ant. It is not widely known what happens when two rows of ants moving in opposite directions run into each other in a passage too narrow for both rows to pass through. One theory says that, in that situation, ants will jump over each other. </p>

<p>From the moment the rows meet, each second every ant jumps over (or gets jumped over, as they agree upon) the ant in front of himself so that the two ants swap places, but only if the other ant is moving in the opposite direction. Find the order of the ants after T seconds.</p>

### 입력 

 <p>The first line contains two integers N1 and N2, the numbers of ants in the first and second rows, respectively.</p>

<p>The next two rows contain the orders of ants in the first and second row (first to last). Each ant is uniquely determined by an uppercase letter of the English alphabet (this letter is unique between both rows). </p>

<p>The last line of input contains the integer T (0 ≤ T ≤ 50). </p>

### 출력 

 <p>Output the order of the ants after T seconds on a single line. Our viewpoint is such that the first row of ants comes from our left side and the other one from our right side. </p>

