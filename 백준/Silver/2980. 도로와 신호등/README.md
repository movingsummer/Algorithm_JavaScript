# [Silver IV] 도로와 신호등 - 2980 

[문제 링크](https://www.acmicpc.net/problem/2980) 

### 성능 요약

메모리: 9380 KB, 시간: 116 ms

### 분류

구현, 수학, 시뮬레이션

### 문제 설명

<p>Luka is driving his truck along a long straight road with many traffic lights. For each traffic light he knows how long the red and green lights will be on (the cycle repeating endlessly). </p>

<p>When Luka starts his journey, all traffic lights are red and just started their cycle. Luka moves one distance unit per second. When a traffic light is red, he stops and waits until it turns green. </p>

<p>Write a program that determines how much time Luka needs to reach the end of the road. The start of the road is at distance zero, the end at distance L</p>

### 입력 

 <p>The first line contains two integers N and L (1 ≤ N ≤ 100, 1 ≤ L ≤ 1000), the number of traffic lights on the road and the length of the road. </p>

<p>Each of the next N lines contains three integers D, R and G, describing one traffic light (1 ≤ D < L, 1 ≤ R ≤ 100, 1 ≤ G ≤ 100). D is the distance of the traffic light from the start of the road. R and G denote how long the red and green lights are on, respectively. </p>

<p>The traffic lights will be ordered in increasing order of D. No two traffic lights will share the same position. </p>

### 출력 

 <p>Output the time (in seconds) Luka needs to reach the end of the road. </p>

<p> </p>

