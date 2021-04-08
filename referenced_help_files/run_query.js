function run_query_html()
{
	var html = 	"<div class='heading_font'>Run_Query</div>" +
				"<div class='code_font bigger indent_1'>" +
					"Boolean Run_Query(String $sql_query)" +
				"</div>" +

				"<div class='heading_font'>Description</div>" +
				"<div class='text_font indent_1 bottom_space_2'>" +
					"Runs a Sql Query and returns True upon success and False if the query fails." +
				"</div>" +

				"<div class='heading_font'>Parameters</div>" +
				"<div class='code_font indent_1 bottom_space_1'>" +
					"sql_query" +
				"</div>" +
				"<div class='text_font indent_2 bottom_space_2'>" +
					"Sql Query of type String that performs an operation on the database." +
				"</div>" +

				"<div class='heading_font'>Return Value</div>" +
				"<div class='text_font indent_1 bottom_space_1'>Value: <span class='inline_code_font'>Boolean</span></div>" +
				"<div class='text_font indent_1 bottom_space_2'>" +
					"Returns <span class='inline_code_font'>True</span> if the submitted Sql query is successful and <span class='inline_code_font'>False</span> if the submitted query fails." +
				"</div>" +

				"<div class='heading_font'>Example</div>" +
				"<div class='text_font indent_1 bottom_space_2'>" +
					"<div class='bottom_space_1'><i>Given the following table:</i></div>" +
					"<span class='heading_font indent_1'>Table_1</span>" +

					"<table style='margin-left: 20px;'>" +
						"<tr>" +
							"<th>field_id</th>" +
							"<th>field_1</th> " +
							"<th>field_2</th> " +
							"<th>field_3</th> " +
						"</tr>" +
						"<tr>" +
							"<td>1</td>" +
							"<td>Text example one.</td>" +
							"<td>100</td>" +
							"<td>Apple</td>" +
						"</tr>" +
						"<tr>" +
							"<td>2</td>" +
							"<td>Text example two.</td>" +
							"<td>101</td>" +
							"<td>Orange</td>" +
						"</tr>" +
						"<tr>" +
							"<td>3</td>" +
							"<td>Text example three.</td>" +
							"<td>256</td>" +
							"<td>Pear</td>" +
						"</tr>" +
					"</table>" +
				"</div>" +

				"<div class='text_font indent_1 bottom_space_1'><i>Code:</i></div>" +
				"<div class='code_font indent_2 bottom_space_1'>" +
					"&lt;?php\n" +
						"\trequire_once(\"./your_folder/database.php\");\n\n" +
						"\t$my_database = new Database(); <i>//Configured using 'database.cfg'.</i>\n\n" +
						"\t$sql\t= \"INSERT INTO Table_1 (field_1, field_2, field_3)\n" +
						"\t\t\t   VALUES ('Text example four.', 512, 'Peach');\";\n" +
						"\t$result\t= $my_database->Run_Query($sql);\n\n" +
						"\tif($result)\n" +
						"\t{\n" +
							"\t\t$insert_id = $my_database->Get_Insert_ID();\n" +
							"\t\techo \"New Record Insert ID: \" . $insert_id . \"\\n\\n\";\n\n" +
							"\t\t$sql\t= \"SELECT * FROM Table_1;\";\n" +
							"\t\t$result\t= $my_database->Get_Recordset($sql);\n\n" +
							"\t\tif($result)\n" +
							"\t\t{\n" +
								"\t\t\tfor($i = 0; $i < count($result); $i++)\n" +
								"\t\t\t{\n" +
									"\t\t\t\techo \"Array Index \" . $i . \":\\n\";\n" +
									"\t\t\t\techo \"\\tfield_id:\\t\" . $result[$i][\"field_id\"] . \"\\n\";\n" +
									"\t\t\t\techo \"\\tfield_1:\\t\" . $result[$i][\"field_1\"] . \"\\n\";\n" +
									"\t\t\t\techo \"\\tfield_2:\\t\" . $result[$i][\"field_2\"] . \"\\n\";\n" +
									"\t\t\t\techo \"\\tfield_3:\\t\" . $result[$i][\"field_3\"] . \"\\n\\n\";\n" +
								"\t\t\t}\n" +
							"\t\t}\n" +
							"\t\telse echo \"No data retrieved from the database.\";\n" +
						"\t}\n" +
						"\telse echo \"Query was unsuccessful.\";\n" +
				"</div>" +
				
				"<div class='text_font indent_1 bottom_space_1'><i>Output:</i></div>" +
				"<div class='code_font indent_2 bottom_space_1'>" +
					"New Record Insert ID: 4\n\n" +
					"Array Index 0:\n" +
							"\tfield_id:\t1\n" +
							"\tfield_1:\tText example one.\n" +
							"\tfield_2:\t100\n" +
							"\tfield_3:\tApple\n\n" +
					"Array Index 1:\n" +
							"\tfield_id:\t2\n" +
							"\tfield_1:\tText example two.\n" +
							"\tfield_2:\t101\n" +
							"\tfield_3:\tOrange\n\n" +
					"Array Index 2:\n" +
							"\tfield_id:\t3\n" +
							"\tfield_1:\tText example three.\n" +
							"\tfield_2:\t256\n" +
							"\tfield_3:\tPear\n\n" +
					"Array Index 3:\n" +
							"\tfield_id:\t4\n" +
							"\tfield_1:\tText example four.\n" +
							"\tfield_2:\t512\n" +
							"\tfield_3:\tPeach\n\n" +
				"</div>";

	return html;
}