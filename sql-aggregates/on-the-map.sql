select "countries"."name" as "countryName",
       count("countryId") as "numberOfCities"
    from "cities"
join "countries" using ("countryId")
group by "countryName";
