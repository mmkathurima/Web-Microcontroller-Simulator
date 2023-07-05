import csv
import pandas as pd

d = dict()
with open("timings.csv", "r") as fopen:
    data = csv.reader(fopen)
    for row in data:
        if row:
            d[row[0]] = row[1:]

pd.DataFrame.from_dict(d, orient="index").T.to_csv("output.csv")