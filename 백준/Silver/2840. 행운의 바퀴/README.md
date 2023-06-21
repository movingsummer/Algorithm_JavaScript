# [Silver IV] 행운의 바퀴 - 2840 

[문제 링크](https://www.acmicpc.net/problem/2840) 

### 성능 요약

메모리: 9348 KB, 시간: 116 ms

### 분류

구현, 시뮬레이션

### 문제 설명

<p>Mirko has recently bought a wheel of fortune. He wrote an uppercase letter of English alphabet onto each wedge, like this:</p>

<p style="text-align: center;"><img alt="" src="https://upload.acmicpc.net/d8130f7d-f2a8-4317-9b5c-0f189a661365/-/preview/" style="width: 283px; height: 253px;"></p>

<p>No letter appears twice in the wheel, and the wheel spins in clockwise direction. There is a pointer that stays in the same place while the wheel is spinning (it is pointing to H in the picture above). When we spin the wheel, the letter to which the pointer is pointing to changes accordingly.</p>

<p>Mirko spinned the wheel K times in a row, and each time he wrote down how many times the pointed letter changed, and what letter was pointed to at the end of that spin.</p>

<p>Slavko found that paper, and would like to now what letters Mirko wrote onto the wedges of the wheel. Help him determine this, if the total number of wedges is known.</p>

### 입력 

 <p>The first line of input contains integers N (2 ≤ N ≤ 25), the number of wedges on the wheel, and K (1 ≤ K ≤ 100), the number of spins.</p>

<p>The following K lines contain descriptions Mirko wrote down for each spin, in order. Each line contains an integer S (1 ≤ S ≤ 100), the number of times the pointed letter changed during that spin, and an uppercase letter at which pointer stopped.</p>

### 출력 

 <p>If there is no wheel that meets the requirements described, output ‘!’.</p>

<p>Otherwise, output sequence of letters written onto the wheel, starting from the pointed letter at the end of the last spin and proceeding clockwise. If some letter can’t be determined, output ‘?’ instead.</p>

