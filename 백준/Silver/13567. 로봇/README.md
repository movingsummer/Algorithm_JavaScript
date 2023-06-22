# [Silver IV] 로봇 - 13567 

[문제 링크](https://www.acmicpc.net/problem/13567) 

### 성능 요약

메모리: 9468 KB, 시간: 172 ms

### 분류

구현, 시뮬레이션

### 문제 설명

<p>A robot receives a series of instructions, and moves in a square region S along the direction parallel to x-axis or y-axis that the instructions tell. The lower left corner of S is (0, 0), and the upper right corner of S is (M, M). Initially, the robot is located at (0, 0), and heads to the east direction.</p>

<p>An instruction is a pair of action and value, where the action is the type that the robot acts at the current robot position, and the value is a parameter with which the robot acts. There are two actions, <code>TURN</code> and <code>MOVE</code>. The instruction <code>TURN 0</code> makes the robot turn 90 degrees to the left at its current position, and <code>TURN 1</code> makes the robot turn 90 degrees to the right at its current position. The instruction <code>MOVE d</code> makes the robot move d units to the direction the robot currently heads. The distance d is a positive integer.</p>

<p>An instruction is valid if the position that the robot stays after executing the instruction is inside or boundary of S. In other words, the instruction is not valid if it makes the robot leave S completely. A series of the instructions is valid if the instructions are all valid.</p>

<p>We suppose that a robot gets a series of instructions, (<code>MOVE 6</code>, <code>TURN 0</code>, <code>MOVE 5</code>, <code>TURN 0</code>, <code>MOVE 2</code>, <code>TURN 0</code>, <code>MOVE 2</code>, <code>TURN 0</code>, <code>MOVE 4</code>, <code>TURN 0</code>, <code>MOVE 3</code>, <code>MOVE 2</code>) as in the left figure below, then it finally reaches at (8, 8). For another series of the instructions, (<code>MOVE 10</code>, <code>TURN 0</code>, <code>MOVE 2</code>, <code>TURN 0</code>, <code>MOVE 5</code>, <code>TURN 1</code>, <code>MOVE 5</code>, <code>TURN 1</code>, <code>MOVE 2</code>, <code>TURN 1</code>, <code>MOVE 3</code>, <code>TURN 0</code>, <code>TURN 0</code>, <code>MOVE 6</code>) in the middle figure, the robot will be at (7, 10). However, the final series of the instructions, (<code>MOVE 5</code>, <code>TURN 0</code>, <code>MOVE 4</code>, <code>TURN 1</code>, <code>MOVE 2</code>, <code>TURN 1</code>, <code>MOVE 5</code>) in the right figure, makes the robot move out of S, i.e., enter the exterior of S, so this series is not valid.</p>

<p style="text-align: center;"><img alt="" src="https://onlinejudgeimages.s3-ap-northeast-1.amazonaws.com/problem/13567/1.png" style="height:228px; width:638px"></p>

<p>Figure 1. Three routes of the robot for three different series of instructions where M = 11.</p>

<p>Given a side length M of a square, a series of n (≥ 1) instructions, and a robot at an initial position (0, 0) of S heading to the east, write a program to output the final position the robot reaches after executing n instructions one by one.</p>

### 입력 

 <p>Your program is to read from standard input. The input starts with a line containing two integers, M and n (1 ≤ M ≤ 1,000, 1 ≤ n ≤ 1,000), where M is the side length of the square S, i.e., its upper right corner has coordinates (x, y) = (M, M), and n is the number of instructions the robot will execute. Each of the following n lines contains a single instruction. Each instruction is represented by a pair of <code>TURN</code> and <code>dir</code> or by a pair of <code>MOVE</code> and <code>d</code>, where <code>dir</code> is 0 or 1 and <code>d</code> is a positive integer no more than 1,000. Note that the robot is initially at (0, 0) of S and heads to the east direction.</p>

### 출력 

 <p>Your program is to write to standard output. Print exactly one line. If the series of the instructions given in the input is valid, the line should contain two non-negative integers, which are x-coordinate and y-coordinate, separated by a space, of the position that the robot reaches just after executing all the instructions. If the series is not valid, then the line should contain a single integer -1.</p>

