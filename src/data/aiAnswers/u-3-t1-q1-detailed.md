**Adversarial Search** is a search technique in **Artificial Intelligence** used in environments where **two players or agents have opposing goals**.
It is mainly applied to **2-player games** such as:
* **chess**
* **tic-tac-toe**
* **checkers**
* **connect-4**
where one player’s gain is the other player’s loss.
Such games are usually modeled as **zero-sum games**, meaning the total gain and loss between both players is **zero**. If one player wins, the other loses.
---
## Game Tree Representation
The game is represented as a **game tree**, where:
* **nodes** represent game states
* **edges** represent possible moves
* **levels** alternate between players
* **leaf nodes** represent final outcomes or evaluated states
The two players are generally:
* **MAX** – tries to maximize the score
* **MIN** – tries to minimize MAX’s score
The core algorithm used is **Minimax**.
---
## Minimax Working
The algorithm explores all possible future moves and countermoves assuming that **both players play optimally**.
### Process
```text id="23109"
generate possible moves
expand game tree
evaluate terminal states
propagate values upward
choose optimal move
```
At **MAX nodes**, the **highest value** is selected.
At **MIN nodes**, the **lowest value** is selected.
### Example
If **MAX** has choices leading to scores **3**, **5**, and **2**, it selects **5**.
If **MIN** can respond with **4** and **1**, it selects **1** to reduce MAX’s gain.
This allows the AI to choose the **best move** while considering the opponent’s **best possible response**.
---
## Role in 2-Player Games
Adversarial search helps the AI:
* **predict opponent moves**
* **plan future strategies**
* **select optimal actions**
* **avoid losing positions**
It is the **fundamental decision-making method** behind game-playing AI systems.
In games like **chess**, it enables the computer to **think several moves ahead**.
---
## Alpha-Beta Pruning
To improve efficiency, **Alpha-Beta Pruning** is used.
It removes branches of the game tree that **cannot affect the final decision**, reducing computation while giving the **same result as minimax**.
> **Alpha-Beta Pruning improves speed by skipping unnecessary branches of the game tree.**